var hidden = true;

$(document).ready(function () {
  $("#myframe").attr("src", "http://localhost:3000/");
});

function mobileWidth() {
  document.getElementById("myframe").style.height = "100%";
  document.getElementById("myframe").style.width = "100%";
}

function notMobileWidth() {
  document.getElementById("myframe").style.height = "490px";
  document.getElementById("myframe").style.width = "380px";
}

window.addEventListener("message", (evt) => {
  var iFrame = document.getElementById("myframe");
  if (evt.data == "checksize") {
    if (document.documentElement.clientWidth > 600) {
      iFrame.contentWindow.postMessage("notMobile", "http://localhost:3000/");
    } else {
      iFrame.contentWindow.postMessage("Mobile", "http://localhost:3000/");
    }
  }

  if (evt.data == "hides") {
    document.getElementById("myframe").style.height = "95px";
    document.getElementById("myframe").style.width = "275px";
    hidden = true;
  } else {
    if ((evt.data =="shows")) {
      hidden = false;
      if (document.documentElement.clientWidth > 600) {
        iFrame.contentWindow.postMessage("notMobile", "http://localhost:3000/");

        notMobileWidth();
      } else {
        iFrame.contentWindow.postMessage("Mobile", "http://localhost:3000/");
        mobileWidth();
      }
    }
  }
});

window.addEventListener("resize", function () {
  let iFrame = document.getElementById("myframe");
  if (document.documentElement.clientWidth > 600) {
    iFrame.contentWindow.postMessage("notMobile", "http://localhost:3000/");
    if (!hidden) {
      notMobileWidth();
    }
  } else {
    // console.log(hidden)
    iFrame.contentWindow.postMessage("Mobile", "http://localhost:3000/");

    if (!hidden) {
      mobileWidth();
    }
  }
});

$(document).ready(function () {
  $(
    '<iframe src="http://localhost:3000/" id="myframe" style="display: block; border: none; position: fixed; width: 275px; height: 95px; max-height: 100%; opacity: 1; right: 0; bottom: 0; background: none transparent; margin: 0; max-width: 100vw; transform: translateY(0px); transition: none 0s ease 0s; visibility: visible; z-index: 999999999 !important;"></iframe>'
  ).appendTo("body");
});
//background: none transparent;
