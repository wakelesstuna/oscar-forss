import styled from "styled-components";
import pdf from "../data/CV-oscar-forss.pdf";

const ResumeButton = ({ Icon, text }) => {
  const download_file = (fileURL, fileName) => {
    // for non-IE
    if (!window.ActiveXObject) {
      const save = document.createElement("a");
      save.href = fileURL;
      save.target = "_blank";
      const filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
      save.download = fileName || filename;
      if (
        navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) &&
        navigator.userAgent.search("Chrome") < 0
      ) {
        document.location = save.href;
      } else {
        const evt = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: false,
        });
        save.dispatchEvent(evt);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
      }
    }
    // for IE < 11
    else if (!!window.ActiveXObject && document.execCommand) {
      const _window = window.open(fileURL, "_blank");
      _window.document.close();
      _window.document.execCommand("SaveAs", true, fileName || fileURL);
      _window.close();
    }
  };

  return (
    <Button onClick={() => download_file(pdf, "cv-oscar-forss")}>
      {Icon}
      <p>{text}</p>
    </Button>
  );
};

const Button = styled.div`
  text-decoration: none;
  display: flex;
  background-color: #333333;
  border-radius: 5px;
  padding: 1rem 3rem;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
    background-color: #cc5200;
    svg,
    p {
      color: #333333;
    }
  }
  svg,
  p {
    color: #fff;
  }
  p {
    margin-left: 0.3rem;
  }
`;

export default ResumeButton;
