import { THEME } from "@/utils/constants/theme";
import { formatAudtionDetailSlug, formatSize, formatTime } from "@/utils/helper";
import Button from "components/Button";
import Input, { Textarea } from "components/Input";
import Layout from "components/Layout";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { formatJobRes } from "network/apiFormatter/jobs";
import { deleteSavedJobAssetApi, getJobByIdApi, getSavedJobRoleDetailApi, saveJobRoleApi, submitRoleApi, updateJobRoleApi } from "network/apis/jobs";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { MdDelete, MdFileDownload } from "react-icons/md";
import { useTheme } from "styled-components";
import { JobItemD, JobRoleD, RoleAssetD } from "types/jobs";
import { AudioUploader } from "./Audio";
import { DocumentUploader } from "./Document";
import { PhotoUploader } from "./Photo";
import { VideoUploader } from "./Video";
import tw from "tailwind-styled-components";
import { DocumentText, TickCircle } from "iconsax-react";
import { formatSavedJobRole } from "./com";
import toast from "react-hot-toast";
import OverlayLoader from "components/OverlayLoader";

const DeleteBtn = (props: any) => {
  return (
    <div {...props} className="rounded-full overflow-hidden aspect-square flex items-center justify-center bg-red-500 text-white hover:bg-red-600 cursor-pointer" style={{ height: 38, aspectRatio: 1 }}>
      <MdDelete className="text-xl" />
    </div>
  );
};

export default function ApplyJob() {
  const [role, setRole] = useState({} as JobRoleD);
  const [job, setJob] = useState({} as JobItemD);
  const router = useRouter();
  const routeRoleId = router.query?.roleId;
  const routeJobId = router.query?.jobId;
  const updateId = router.query?.id;
  const [loading, setLoading] = useState(true);

  //FORM
  const { profile } = useProfileStore();
  const [state, setState] = useState({
    subject: "",
    message: ``,
    name: "",
    email: "",
    letter: "",
  });

  useEffect(() => {
    if (!updateId) {
      setState((s) => ({
        ...s,
        subject: "Submission for project " + role?.name,
        message: `Dear Casting Director,

I am very interested in the casting for talent regarding the ${job.title} project.

For further information, please visit my profile at: https://www.exploretalent.com/${profile.talentlogin}

I look forward to your audition process!

Sincerely,
${profile?.name}
${profile.email}`,

        name: profile.fname + " " + profile.lname,
        email: profile.email,
        letter: "",
      }));
    }
  }, [updateId, profile, role, job.title]);

  const { token } = useAuth();
  const theme = useTheme();
  const [showFullJobDetail, setShowFullJobDetail] = useState(false);

  const [photos, setPhotos] = useState<RoleAssetD[]>([]);
  const [videos, setVideos] = useState<RoleAssetD[]>([]);
  const [documents, setDocuments] = useState<RoleAssetD[]>([]);
  const [audios, setAudios] = useState<RoleAssetD[]>([]);
  // const [isSaved, setIsSaved] = useState(routeRole.inCart);
  // const [isApplied, setIsApplied] = useState(routeRole.applied);
  const [savedId, setSavedId] = useState(0);
  const [blockSave, setBlockSave] = useState(false);

  const [saving, setSaving] = useState(false);
  const [applying, setApplying] = useState(false);

  //JOB
  const fetchDetail = useCallback(async () => {
    if (!routeJobId || !routeRoleId || !token) {
      return;
    }

    try {
      setLoading(true);
      const res = await getJobByIdApi({ token, id: routeJobId });
      const data = formatJobRes(res);
      setLoading(false);
      setRole(data.roles.filter((i) => i.id === Number(routeRoleId))[0]);
      setJob(data);
    } catch (err) {
      console.log("Err", err);
      setLoading(false);
    }
  }, [routeJobId, routeRoleId, token]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  const removeAsset = async ({ type, id }: { type: "audio" | "video" | "document" | "image"; id: number }) => {
    if (type === "image") {
      setPhotos((s) => s.filter((i) => i.id !== id));
    } else if (type === "video") {
      setVideos((s) => s.filter((i) => i.id !== id));
    } else if (type === "document") {
      setDocuments((s) => s.filter((i) => i.id !== id));
    } else if (type === "audio") {
      setAudios((s) => s.filter((i) => i.id !== id));
    }

    try {
      const res = await deleteSavedJobAssetApi({ token, id });
    } catch (err) {
      console.log("Err", err);
    }
  };

  useEffect(() => {
    const fetchNow = async () => {
      try {
        setLoading(true);
        const res = await getSavedJobRoleDetailApi({ id: updateId, token });
        setLoading(false);
        if (res) {
          const dat = formatSavedJobRole(res);
          setAudios(dat.audios);
          setVideos(dat.videos);
          setPhotos(dat.photos);
          setDocuments(dat.documents);
          setState((s) => ({
            ...s,
            name: dat?.name,
            email: dat.email,
            message: dat.message,
            letter: dat.letter,
            subject: dat.subject,
          }));
        }
      } catch (err) {
        setLoading(false);
        console.log("Err", err);
      }
    };

    if (updateId) {
      fetchNow();
    }
  }, [updateId, token]);

  const saveJob = async () => {
    try {
      if (!state.email?.trim() || !state?.name?.trim() || !state.message?.trim() || !state.subject?.trim()) {
        toast.error("Fill form details", {
          position: "top-center",
        });
        return false;
      }
      setSaving(true);

      let res: any;

      if (updateId) {
        res = await updateJobRoleApi({
          token,
          id: updateId,
          raw: {
            bam_role_id: role.id,
            job_order_assets_ids: [...photos, ...audios, ...documents, ...videos].map((i) => i.id),
            name: state?.name,
            email: state.email,
            subject: state.subject,
            message: state.message,
            cover_letter: state.letter,
          },
        });
      } else {
        res = await saveJobRoleApi({
          token,
          raw: {
            bam_role_id: role.id,
            job_order_assets_ids: [...photos, ...audios, ...documents, ...videos].map((i) => i.id),
            name: state?.name,
            email: state.email,
            subject: state.subject,
            message: state.message,
            cover_letter: state.letter,
          },
        });
      }

      setSaving(false);
      if (res) {
        setRole((s) => ({ ...s, inCart: true }));

        if (updateId) {
          toast.success("Details updated", {
            position: "top-center",
          });
        } else {
          toast.success("Job role saved successfully", {
            position: "top-center",
          });
        }
        router.back();
        return true;
      } else {
        return false;
      }
    } catch (err: any) {
      setSaving(false);
      if (err?.errors?.role_cart_item_count) {
        setBlockSave(true);
        toast.error("Can't add more than 10 roles , upgrade your account to add more roles", {
          position: "top-center",
        });
      }
      console.log("Save Err", err);
      // throw err;
      return false;
    }
  };

  const onApply = async () => {
    try {
      setApplying(true);
      const saveRes = await saveJob();
      if (saveRes) {
        const res = await submitRoleApi({
          token,
          raw: {
            casting_id: job.id,
            role_id: role.id,
            c_type: 0,
          },
        });
        setApplying(false);
        if (res) {
          setRole((s) => ({ ...s, applied: true }));
          toast.success("Role submmission sucessfull", {
            position: "top-center",
          });
          router.back();
        }
      } else {
        setApplying(false);
      }
    } catch (err) {
      setApplying(false);
      console.log("Appply Err", err);
    }
  };

  return (
    <div className="padding-small  max-w-screen-xl mx-auto">
      {loading ? (
        <div className="h-80vh w-full flex items-center justify-center">
          <OverlayLoader />
        </div>
      ) : (
        <div className="xl:px-0 px-3">
          <div className="mb-8">
            <Link href={`/auditions/${formatAudtionDetailSlug(job.title + " " + job.location + " " + job.zip, job.id)}`}>
              <a className="heading-link">
                <div className="text-lg font-bold mb-1 hover:text-blue-500 transition-all">{job.title}</div>
              </a>
            </Link>
            <div className="text-sm mb-3 whitespace-pre-wrap">
              {job.desc?.length > 200 ? (showFullJobDetail ? job?.desc : job?.desc?.substring(0, 200) + "... ") : job?.desc}

              {job?.desc?.length > 200 && (
                <div className="text-blue-500 mt-2 cursor-pointer" onClick={() => setShowFullJobDetail((s) => !s)}>
                  {showFullJobDetail ? "View less" : "View more.."}
                </div>
              )}
            </div>

            <div className="text-sm">
              <div>
                <strong>Location : </strong>
                <span>{job.location}</span>
              </div>

              <div>
                <strong>Posted at : </strong>
                <span>{job.createdAt}</span>
              </div>
              <div>
                <strong>Expires on : </strong>
                <span>{job.expiration}</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="font-bold mb-2 ">Applying for role:</div>
            <div className="border p-4 rounded-md border-blue-500 bg-blue-50">
              <div>
                <h4 className="font-semibold text-base mb-1">{role?.name}</h4>

                <p
                  className="mb-3"
                  dangerouslySetInnerHTML={{
                    __html: role.desc,
                  }}
                />

                {/* <p className="font-semibold seeking">Seeking 1 talent for this role</p> */}

                <div className="">
                  <div className="text-sm">
                    <div>
                      <strong>Gender : </strong>
                      <span>{role.gender}</span>
                    </div>

                    <div>
                      <strong>Ethnicity : </strong>
                      <span>{role.ethnicity?.join(', ')}</span>
                    </div>
                    <div>
                      <strong>Age : </strong>
                      <span>{role.age}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-base font-bold mb-3">Submission Deatils:</div>

            <div className="flex flex-col gap-3 w-full mb-4" style={{ maxWidth: 700 }}>
              <Field>
                <Label>Name</Label>
                <Input className="w-full" value={state?.name} onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))} />
              </Field>
              <Field>
                <Label>Email</Label>
                <Input className="w-full" value={state.email} onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))} />
              </Field>
              <Field>
                <Label>Subject</Label>
                <Input className="w-full" value={state.subject} onChange={(e) => setState((s) => ({ ...s, subject: e.target.value }))} />
              </Field>
              <Field>
                <Label>Message</Label>
                <Textarea className="w-full" rows={4} value={state.message} onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))} />
              </Field>
              <Field>
                <Label>Cover letter</Label>
                <Textarea className="w-full" rows={5} value={state.letter} onChange={(e) => setState((s) => ({ ...s, letter: e.target.value }))} />
              </Field>
              <Field>
                <Label>Add Audio</Label>
                <div>
                  <AudioUploader onUpload={(d) => setAudios((s) => [...s, d])} roleId={role.id || 0} />
                </div>

                <div className="flex flex-col gap-2">
                  {audios.map((i) => {
                    return (
                      <div key={i.id} className="shadow p-2 px-4 rounded-md">
                        <div className="flex mb-2 justify-between items-center">
                          <div className="text-sm font-semibold">{i?.name}</div>
                          <DeleteBtn onClick={() => removeAsset({ id: i.id, type: "audio" })} />
                        </div>
                        <audio controls src={i.uri} className="w-full" />
                      </div>
                    );
                  })}
                </div>
              </Field>
              <Field>
                <Label>Add Video</Label>
                <div>
                  <VideoUploader onUpload={(d) => setVideos((s) => [...s, d])} roleId={role.id || 0} />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {videos.map((i) => {
                    return (
                      <div key={i.id} className="shadow rounded-md overflow-hidden">
                        <div className="px-3 py-2 flex justify-between items-center ">
                          <div className="text-sm font-semibold grow">{i?.name}</div>

                          <DeleteBtn onClick={() => removeAsset({ id: i.id, type: "video" })} />
                        </div>
                        <div className="aspect-square bg-black">
                          <video controls src={i.uri} className="object-contain w-full h-full" />{" "}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Field>
              <Field>
                <Label>Add Images</Label>
                <div>
                  <PhotoUploader onUpload={(d) => setPhotos((s) => [...s, d])} roleId={role.id || 0} />
                </div>

                <div className="grid grid-cols-2 gap-1">
                  {photos.map((i) => {
                    return (
                      <div key={i.id} className="shadow rounded-md overflow-hidden">
                        <div className="aspect-square bg-black relative">
                          <div className="absolute top-2 right-2 z-10">
                            <DeleteBtn onClick={() => removeAsset({ id: i.id, type: "image" })} />
                          </div>

                          <img src={i.uri} className="object-contain w-full h-full" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Field>
              <Field>
                <Label>Add Document </Label>
                <div>
                  <DocumentUploader onUpload={(d) => setDocuments((s) => [...s, d])} roleId={role.id || 0} />
                </div>

                <div>
                  {documents.map((i) => {
                    return (
                      <div className="flex items-center p-2 shadow-md gap-2 flex-wrap" key={i.id}>
                        <div className="flex items-center grow">
                          <div className="text-gray-500 ">
                            <DocumentText size={THEME.iconSize.medium} variant="Bold" />
                          </div>

                          <div className="grow whitespace-pre-wrap break-words">{i?.name}</div>
                        </div>

                        <div className="flex gap-1 items-center">

                          <a href={i.uri} download className="aspect-square items-center justify-center bg-blue-500 cursor-pointer rounded-full overflow-hidden flex text-white hover:bg-blue-600" style={{ height: THEME.iconBtnSize.root }}>
                            <MdFileDownload className="text-xl" />
                          </a>

                          <DeleteBtn onClick={() => removeAsset({ id: i.id, type: "document" })} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Field>
            </div>

            <div className="mt-8">
              {role.applied ? (
                <>
                  <Button icon={<TickCircle variant="Bold" />} disabled={true} green>
                    Applied
                  </Button>
                </>
              ) : profile.joinStatus === 5 ? (
                // false ? (
                role.inCart ? (
                  <>
                    <div className="flex gap-2">
                      <Button loading={saving && !applying} onClick={saveJob} primary>
                        Update
                      </Button>
                      <Button loading={applying} onClick={onApply} primary>
                        Apply Now
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex gap-2">
                    <Button loading={saving && !applying} onClick={saveJob} primary>
                      Save for later
                    </Button>
                    <Button loading={applying} onClick={onApply} primary>
                      Apply Now
                    </Button>
                  </div>
                )
              ) : (
                <>
                  <div>
                    {role.inCart ? (
                      <>
                        <div>
                          <div className="text-red-500 font-semibold text-base mb-2">In order to submit you job application you have to purchase subscription plan </div>
                        </div>
                        <div className="flex gap-2">
                          <Button primary loading={saving && !applying} onClick={saveJob}>
                            Update{" "}
                          </Button>
                          <Button primary>Upgrade plan to submit </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <Button loading={saving && !applying} onClick={saveJob} primary>
                          Add to Job Cart
                        </Button>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Field = tw.div`w-full`;
const Label = tw.div`font-semibold mb-1`;
