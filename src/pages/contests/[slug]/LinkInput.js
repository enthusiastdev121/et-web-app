import React from "react";


export default function LinkInput(props) {
    const inputRef = React.useRef();
    const handleFileChange = (event) => {
        props.getLink(event.target.value)
    };

    const selectType = (event) => {
        props.getLinkType(event.target.value)
    }




    return (
        <div className="VideoInput">
            {/* {!source && ( */}
            <div className="rounded-lg relative add-photo-container">

                <div className="text-center bg-upload-audio  bg-upload-video">
                    <div className="bg-upload-audio-inner">
                        <label className="block text-left">Select Type</label>
                        <select onChange={selectType}>
                            <option>tiktok</option>
                            <option>instagram</option>
                            <option>youtube</option>
                            <option>vimeo</option>
                            <option>soundcloud</option>
                        </select>
                    </div>
                    <div className="bg-upload-audio-inner">
                        <label className="block text-left">Enter link entry</label>
                        <input
                            type="url"
                            className=" left-0  border-2 h-10 w-full"
                            ref={inputRef}
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            </div>
            {/* )} */}
            {/* 
            {source && (
                <div className="rounded-lg relative add-photo-container">



                </div>


            )} */}




        </div>
    );
}
