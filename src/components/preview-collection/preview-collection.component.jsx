import React from "react";
import './preview-collection.style.scss.scss';
import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({ title, items }) => {
    return (
        <div className="collection-preview">

            <h1 className="">{title.toUpperCase()}</h1>

            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map(({ id, ...itemProps }) => (
                        <CollectionItem key={id}{...itemProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;