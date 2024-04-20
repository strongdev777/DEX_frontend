import React from "react";

// load assets
import "../../assets/css/trade.scss";
import phone from "../../assets/image/phone.svg";
import btc from "../../assets/image/btc.png";
import qrcode from "../../assets/image/qrcode.png";

const Trade = () => {
  return (
    <div className="container">
      <div className="trade">
        <div className="phone">
          <div className="img">
            <img src={phone} />
          </div>
          <div className="carusel">
            <div className="eachscene">
              <div className="eachsceneWord">Desktop</div>
              <hr className="selectLine" />
            </div>
            <div className="eachscene">
              <div className="eachsceneWord">Lite</div>
              <hr className="selectLine" />
            </div>
            <div className="eachscene">
              <div className="eachsceneWord">Pro</div>
              <hr className="selectLine" />
            </div>
          </div>
        </div>
        <div className="download">
          <div className="title">Trade on the go. Anywhere, anytime.</div>
          <div className="qrcord">
            <div className="image">
              <img src={qrcode} />
            </div>
            <div className="text">
              <div className="upText">Scan to Download the App</div>
              <div className="downText">IOS and Android</div>
            </div>
          </div>
          <div className="downImages">
            <div className="each">
              <div className="downImage">
                <div className="img">
                  <svg
                    class="bn-svg text-[40px] text-t-primary mobile:text-[32px] tablet:text-[32px]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.69 1.978c.133 1.149-.345 2.28-1.046 3.112-.73.819-1.9 1.445-3.037 1.364-.15-1.104.428-2.28 1.073-2.996.73-.815 1.997-1.438 3.01-1.48zm3.64 6.17c-.135.076-2.231 1.27-2.208 3.699.026 2.94 2.707 3.912 2.739 3.922-.015.069-.42 1.403-1.424 2.757-.84 1.193-1.72 2.359-3.116 2.38-.665.014-1.113-.168-1.58-.357-.488-.197-.996-.402-1.79-.402-.843 0-1.374.212-1.886.416-.442.177-.87.349-1.474.372-1.33.047-2.347-1.273-3.217-2.454-1.738-2.413-3.092-6.8-1.277-9.786.88-1.464 2.484-2.406 4.197-2.432.755-.014 1.48.262 2.114.504.485.186.918.35 1.273.35.312 0 .733-.158 1.224-.343.773-.291 1.72-.648 2.683-.552.659.018 2.536.247 3.745 1.924l-.003.002z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                
              </div>
              <div className="imgTitle">MacOS</div>
            </div>
            <div className="each">
              <div className="downImage">
                <div className="img">
                  <svg
                    class="bn-svg text-[40px] text-t-primary mobile:text-[32px] tablet:text-[32px]"
                    viewBox="0 0 24 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3.895h8.533v8.529H3v-8.53zm9.467 0H21v8.529h-8.533v-8.53zM3 13.362h8.533v8.533H3v-8.533zm9.467 0H21v8.533h-8.533"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="imgTitle">Windows</div>
            </div>
            <div className="each">
              <div className="downImage">
                <div className="img">
                  <svg
                    class="bn-svg text-[40px] text-t-primary mobile:text-[32px] tablet:text-[32px]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.578 18.633c-.553-.23-1.015-.588-.99-1.267.039-.691-.488-1.139-.488-1.139s.463-1.498.039-2.74c-.424-1.24-1.837-3.225-2.917-4.735-1.092-1.51-.167-3.239-1.156-5.453-.99-2.227-3.546-2.087-4.92-1.14-1.375.948-.951 3.29-.887 4.404.064 1.114.026 1.894-.103 2.189-.128.281-1.015 1.344-1.606 2.214-.59.883-1.015 2.714-1.451 3.456-.424.755-.129 1.434-.129 1.434s-.295.102-.527.589c-.23.486-.693.716-1.516.883-.822.166-.822.691-.629 1.28.193.589 0 .909-.231 1.664-.232.742.925.973 2.03 1.1 1.117.129 2.363.846 3.417.986 1.053.128 1.375-.716 1.375-.716s1.182-.27 2.428-.295a10.117 10.117 0 012.428.256s.231.525.655.755c.424.23 1.35.256 1.94-.358.591-.627 2.171-1.408 3.058-1.895.899-.499.745-1.241.18-1.472zM12.895 4.246c.565 0 1.015.55 1.015 1.242 0 .486-.231.909-.566 1.113l-.27-.115c.206-.102.348-.358.348-.653 0-.384-.245-.704-.54-.704-.296 0-.54.32-.54.704 0 .141.039.282.09.397-.18-.064-.334-.128-.462-.18a2.24 2.24 0 01-.09-.575c0-.678.462-1.229 1.015-1.229zm-.064 2.611c.282.103.59.282.565.461-.039.18-.18.18-.565.41-.386.23-1.208.742-1.478.768-.27.038-.41-.115-.694-.295-.282-.179-.809-.614-.68-.844 0 0 .41-.32.59-.474.18-.166.643-.563.925-.512.296.051 1.054.384 1.337.486zm-2.544-2.419c.45 0 .81.525.81 1.178 0 .115-.014.23-.04.333a.828.828 0 00-.32.192c-.052.038-.103.09-.155.128a.824.824 0 00.065-.512c-.065-.359-.296-.615-.527-.576-.231.038-.373.358-.321.716.064.359.295.615.526.576.013 0 .026 0 .039-.012a2.978 2.978 0 01-.321.281c-.321-.153-.566-.601-.566-1.126.013-.653.373-1.178.81-1.178zm-.86 16.487c-.104.473-.656.806-.656.806-.501.154-1.889-.448-2.518-.704-.63-.256-2.236-.346-2.441-.576-.206-.243.103-.755.18-1.254.077-.5-.154-.807-.077-1.152.077-.333 1.104-.333 1.49-.576.398-.23.475-.91.784-1.101.32-.18.886.473 1.13.832.231.358 1.13 1.933 1.49 2.317.373.422.72.934.617 1.408zm5.806-4.544c-.09.46-.09 2.124-.09 2.124s-1.015 1.396-2.595 1.626c-1.58.23-2.364.064-2.364.064l-.886-1.011s.693-.103.59-.781c-.102-.678-2.106-1.626-2.466-2.483-.36-.845-.064-2.279.398-3.008.463-.717.758-2.279 1.208-2.803.462-.525.822-1.626.655-2.125 0 0 .99 1.177 1.67.985.694-.192 2.236-1.33 2.467-1.139.231.192 2.197 4.506 2.39 5.875.192 1.37-.129 2.42-.129 2.42s-.758-.205-.848.256zm5.036 3.072c-.308.281-2.017.96-2.53 1.497-.515.525-1.17.96-1.58.832-.412-.128-.772-.69-.592-1.497.18-.807.334-1.703.309-2.202-.026-.512-.129-1.19 0-1.293.128-.102.333-.051.333-.051s-.102.96.489 1.216c.59.256 1.426-.102 1.683-.358.257-.256.436-.628.436-.628s.257.128.232.538c-.026.41.18.986.565 1.19.373.192.964.474.655.756z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="imgTitle">Linux</div>
            </div>
          </div>
          <div className="more">More Download Options</div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
