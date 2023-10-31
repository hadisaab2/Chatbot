var hidden = true;

$(document).ready(function () {
  $("#myframe").attr("src", "http://92.204.249.139:3003/");
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
  if (evt.data.eventid == "redirect") {
    // console.log("entereddd")
    // console.log(evt.data.url)

    window.location.href = evt.data.url;
  }

  if (evt.data == "checksize") {
    if (document.documentElement.clientWidth > 600) {
      iFrame.contentWindow.postMessage(
        "notMobile",
        "http://92.204.249.139:3003/"
      );
    } else {
      iFrame.contentWindow.postMessage("Mobile", "http://92.204.249.139:3003/");
    }
  }

  if (evt.data == "hides") {
    document.getElementById("myframe").style.height = "95px";
    document.getElementById("myframe").style.width = "300px";
    hidden = true;
  } else {
    if (evt.data == "shows") {
      hidden = false;
      if (document.documentElement.clientWidth > 600) {
        iFrame.contentWindow.postMessage(
          "notMobile",
          "http://92.204.249.139:3003/"
        );

        notMobileWidth();
      } else {
        iFrame.contentWindow.postMessage(
          "Mobile",
          "http://92.204.249.139:3003/"
        );
        mobileWidth();
      }
    }
  }
});

window.addEventListener("resize", function () {
  let iFrame = document.getElementById("myframe");
  if (document.documentElement.clientWidth > 600) {
    iFrame.contentWindow.postMessage(
      "notMobile",
      "http://92.204.249.139:3003/"
    );
    if (!hidden) {
      notMobileWidth();
    }
  } else {
    iFrame.contentWindow.postMessage("Mobile", "http://92.204.249.139:3003/");

    if (!hidden) {
      mobileWidth();
    }
  }
});

$(document).ready(function () {
  $(
    '<iframe sandbox="allow-same-origin" src="http://92.204.249.139:3003/" id="myframe" style="display: block; border: none; position: fixed; width: 300px; height: 95px; max-height: 100%; opacity: 1; right: 0; bottom: 0; background: none transparent; margin: 0; max-width: 100vw; transform: translateY(0px); transition: none 0s ease 0s; visibility: visible; z-index: 999999999 !important;"></iframe>'
  ).appendTo("body");
});
//background: none transparent;
