export const loadingIcon = `
.sn_spinner {
    margin-top:5px;
    width: 18px;
    height: 18px;
    border: 2px solid #C5C4EF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  <div><span class="bt_spinner"></span></div>`;
