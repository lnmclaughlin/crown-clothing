import DirectoryItem from "../directory-item/DirectoryItem";
import { DirectoryContainer } from "./directory.styles.js";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
