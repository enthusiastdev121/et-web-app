import Image from "next/image";

import { Modal, MoreReq, Span } from "./Looking5.styled";
import { PrimaryBtn, TertiaryBtn } from "@/styles/Btn.styled";
import Link from "next/link";

export default function AddRoleModal({ handleClose }) {
  return (
    <Modal className="rounded-xl shadow-lg max-w-3xl max-h-80vh overflow-y-scroll w-80v">
      <div className="flex items-center justify-between p-5 border-b-2 sticky top-0 bg-white">
        <h3 className="text-xl sm:text-3xl">Add New Role</h3>
        <div onClick={handleClose} className="cursor-pointer">
          <Image src="/svg/cross-dark.svg" alt="cross" height="15" width="15" />
        </div>
      </div>
      <div className="p-5 text-left sm:text-lg sm:px-10 md:px-20">
        <form>
          <div className="mb-5">
            <label htmlFor="role-for" className="font-semibold block mb-1">
              This is role for
            </label>
            <select
              name="role-for"
              id="role-for"
              className="border-2 rounded-md p-3 w-full"
            >
              <option value="Actor for feature film">
                Actor for feature film
              </option>
              <option value="Actor for feature film">
                Actor for feature film
              </option>
              <option value="Actor for feature film">
                Actor for feature film
              </option>
              <option value="Actor for feature film">
                Actor for feature film
              </option>
              <option value="Actor for feature film">
                Actor for feature film
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="role-name" className="font-semibold block mb-1">
              Role Name
            </label>
            <input
              type="text"
              placeholder="Self Tap Audition"
              className="border-2 rounded-md p-3 w-full"
            />
          </div>

          <div className="mb-5">
            <p className="font-semibold mb-1">Gender</p>
            <input type="radio" id="any" name="gender" />
            <label htmlFor="any" className="ml-1 mr-5">
              Any
            </label>

            <input type="radio" id="male" name="gender" />
            <label htmlFor="male" className="ml-1 mr-5">
              Male
            </label>

            <input type="radio" id="female" name="gender" />
            <label htmlFor="female" className="ml-1">
              Female
            </label>
          </div>

          <div className="mb-5">
            <label htmlFor="range" className="font-semibold block mb-1">
              Age Range
            </label>
            <input
              type="range"
              id="range"
              name="age"
              min="0"
              max="100"
              className="w-full"
            />
          </div>

          <div className="mb-5 text-xs sm:text-sm md:text-base">
            <p className="font-semibold text-sm mb-1">
              Add more requirements <Span>(Optional)</Span>
            </p>
            <MoreReq className="flex flex-wrap justify-center">
              <div>
                <input
                  type="checkbox"
                  checked
                  id="1"
                  className="check-with-label-requirements hidden"
                />
                <label
                  htmlFor="1"
                  className="label-for-check-requirements  flex items-center justify-center btn"
                >
                  <span className="mr-2">Worldwide</span>
                  <div className="tick"></div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="2"
                  className="check-with-label-requirements hidden"
                />
                <label
                  htmlFor="2"
                  className="label-for-check-requirements  flex items-center justify-center btn"
                >
                  <span className="mr-2">Worldwide</span>
                  <div className="tick"></div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="3"
                  className="check-with-label-requirements hidden"
                />
                <label
                  htmlFor="3"
                  className="label-for-check-requirements  flex items-center justify-center btn"
                >
                  <span className="mr-2">Worldwide</span>
                  <div className="tick"></div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="4"
                  className="check-with-label-requirements hidden"
                />
                <label
                  htmlFor="4"
                  className="label-for-check-requirements  flex items-center justify-center btn"
                >
                  <span className="mr-2">Worldwide</span>
                  <div className="tick"></div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="5"
                  className="check-with-label-requirements hidden"
                />
                <label
                  htmlFor="5"
                  className="label-for-check-requirements  flex items-center justify-center btn"
                >
                  <span className="mr-2">Worldwide</span>
                  <div className="tick"></div>
                </label>
              </div>
            </MoreReq>
          </div>

          <div className="w-full mb-10">
            <label htmlFor="description" className="font-semibold block mb-1">
              Role description <Span>(Optional)</Span>{" "}
            </label>
            <textarea
              id="description"
              name="role-description"
              placeholder="Role description Role description lorem ipsum"
              className="border-2 rounded-lg w-full text-base p-3 h-32"
            ></textarea>
          </div>

          <div className="text-right">
            {/* <Link href="/" passHref> */}
            <TertiaryBtn className="btn mr-1 sm:mr-3">Cancel</TertiaryBtn>
            {/* </Link> */}
            {/* <Link href="/" passHref> */}
            <PrimaryBtn className="btn">Save &rarr;</PrimaryBtn>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </Modal>
  );
}
