import resume from "../../assets/Files/Narayan_Das_Resume.pdf";

export const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.download = "Narayan-Das-Resume.pdf";
    link.href = resume;
    link.click();
    window.open("#", "_blank");
};