let takeVideo = async (stream) => {
  let video = document.createElement("video");
  video.srcObject = stream;
  await video.play();
  return video;
};

let takeFrame = (video) => {
  let canvas = document.createElement("canvas");
  canvas.height = video.videoHeight;
  canvas.width = video.videoWidth;
  canvas.getContext('2d').drawImage(video, 0, 0);
  return canvas;
};

let replaceImgWithVideo = (img, stream) =>
  takeVideo(stream).then((video) => {
    img.parentElement.replaceChildren(video);
    return {video, stream};
  });

let replaceVideoWithCanva = (video) => {
  let frame = takeFrame(video);
  video.parentElement.replaceChildren(frame);
  return frame;
};

let img = document.getElementById("default-img");
img.onclick = () =>
  navigator.mediaDevices
    .getUserMedia({ video: true }) // Access Webcam
    .then((stream) => replaceImgWithVideo(img, stream)) // Put webcam preview on HTML
    .then(({ video, stream }) => {
      console.log(video);
      video.onclick = () => {
        let canva = replaceVideoWithCanva(video); // Put screenshot on HTML
        stream.getTracks().forEach((e) => e.stop()); // Stop all stream tracks
        console.log(canva.parentElement)
        canva.onclick = img.onclick;
        img = canva;
      };
    })
    .catch(console.error);
