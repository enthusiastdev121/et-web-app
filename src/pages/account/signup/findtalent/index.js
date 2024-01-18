import CategoryPage from "../../../../components/account/FindTalent";
import LookingPage from "../../../../components/account/FindTalent/Looking";
import LookingPage1 from "../../../../components/account/FindTalent/Looking1";
import LookingPage2 from "../../../../components/account/FindTalent/Looking2";
import LookingPage3 from "../../../../components/account/FindTalent/Looking3";
import LookingPage4 from "../../../../components/account/FindTalent/Looking4";
import LookingPage5 from "../../../../components/account/FindTalent/Looking5";
import LookingPage6 from "../../../../components/account/FindTalent/Looking6";
import LookingPage7 from "../../../../components/account/FindTalent/Looking7";
import LookingPage8 from "../../../../components/account/FindTalent/Looking8";
import LookingPage9 from "../../../../components/account/FindTalent/Looking9";
import LookingPage10 from "../../../../components/account/FindTalent/Looking10";

export default function FindTalentPage() {
  return (
    <div>
      <div id="category">
        <CategoryPage />
      </div>
      <div className="hidden" id="looking">
        <LookingPage />
      </div>
      <div className="hidden" id="looking1">
        <LookingPage1 />
      </div>
      <div className="hidden" id="looking2">
        <LookingPage2 />
      </div>
      <div className="hidden" id="looking3">
        <LookingPage3 />
      </div>
      <div className="hidden" id="looking4">
        <LookingPage4 />
      </div>
      <div className="hidden" id="looking5">
        <LookingPage5 />
      </div>
      <div className="hidden" id="looking6">
        <LookingPage6 />
      </div>
      <div className="hidden" id="looking7">
        <LookingPage7 />
      </div>
      <div className="hidden" id="looking8">
        <LookingPage8 />
      </div>
      <div className="hidden" id="looking9">
        <LookingPage9 />
      </div>
      <div className="hidden" id="looking10">
        <LookingPage10 />
      </div>
    </div>
  );
}
