/* eslint-disable react/prop-types */
import JSZip from "jszip";
import { saveAs } from 'file-saver';

const Worker = ({ list }) => {
  const newText=list.join("\n")
 
const downloadMAker=()=>{
  const zip = new JSZip();
  let blob = new Blob([newText], {type: "text/plain;charset=utf-8"});
  zip.file("dictionary.txt", blob);
  zip.generateAsync({type:"blob"}).then(function(content) {    
    saveAs(content, "dictionary.zip");
});
}

  return (
    <>
      <button onClick={downloadMAker}>real download</button>
    </>
  );
};

export default Worker;
