const gpu = navigator.gpu;
const containerElement = document.getElementById("container") as HTMLElement
if(gpu)  containerElement.innerText = "WebGPU available right now"
else{
    containerElement.innerText = "webgpu not available right now but might be in future"
}

