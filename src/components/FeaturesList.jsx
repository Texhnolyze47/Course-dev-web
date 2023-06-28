import FeaturesInstructors from "./FeaturesInstructors.jsx";
import FeaturesLiveClass from "./FeaturesLiveClass.jsx"
import FeaturesSupport from "./FeaturesSupport.jsx"

function FeaturesList() {
    return (
        <div className="flex flex-row px-6 py-16">
            <FeaturesInstructors />
            <FeaturesLiveClass />
            <FeaturesSupport />
        </div>
    );

}

export default FeaturesList;