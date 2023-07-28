import "./directory-item.styles.js";

import {
  BackgroundImg,
  DirectoryItemBody,
  DirectoryItemContainer,
} from "./directory-item.styles.js";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImg imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
