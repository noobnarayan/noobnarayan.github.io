import resume from "../../assets/Files/Narayan-Das-Resume.pdf";

export const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.download = "Narayan-Das-Resume.pdf";
    link.href = resume;
    link.click();
    window.open("https://drive.google.com/file/d/1MDhdpGOMx_gb1R4b513W6X5QXtQJ5D8o/view?usp=sharing", "_blank");
};