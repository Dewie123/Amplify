import "./Row2.css";

export default function Row({
  className = "",
  container1 = "",
  container2 = "",
  text = "Janet Paua",
  container3 = "",
  text1 = "5.30pm-10pm",
  text2 = "Sound Tech",
  container4 = "",
  text3 = "5.30pm-10pm",
  text4 = "Sound Tech",
  container5 = "",
  text5 = "5.30pm-10pm",
  text6 = "Sound Tech",
  container6 = "",
  text7 = "5.30pm-10pm",
  text8 = "Sound Tech",
  container7 = "",
  text9 = "5.30pm-10pm",
  text10 = "Sound Tech",
}: RowProps) {
  return (
    <div className={`${className} row-row-8`}>
      <div
        className={`${container1} row-t-cell-cell-cell-cell-cell-cell-cell-cell-6`}
      >
        <div className="row-cell-48">
          <div className={`${container2}`}>{text}</div>
        </div>
        <div className="row-cell-49">
          <div className="row-text-37">
            <span>
              <p className={`${container3}`}>{text1}</p>
              <p className="row-para-45">{text2}</p>
            </span>
          </div>
        </div>
        <div className="row-cell-50">
          <div className="row-text-38">
            <span>
              <p className={`${container4}`}>{text3}</p>
              <p className="row-para-47">{text4}</p>
            </span>
          </div>
        </div>
        <div className="row-cell-51">
          <div className="row-text-39">
            <span>
              <p className={`${container5}`}>{text5}</p>
              <p className="row-para-49">{text6}</p>
            </span>
          </div>
        </div>
        <div className="row-cell-52">
          <div className="row-text-40">
            <span>
              <p className={`${container6}`}>{text7}</p>
              <p className="row-para-51">{text8}</p>
            </span>
          </div>
        </div>
        <div className="row-cell-53">
          <div className="row-text-41">
            <span>
              <p className={`${container7}`}>{text9}</p>
              <p className="row-para-53">{text10}</p>
            </span>
          </div>
        </div>
        <div className="row-cell-54" />
        <div className="row-cell-55" />
      </div>
    </div>
  );
}

interface RowProps {
  className?: string;
  container1: string;
  container2: string;
  text: string;
  container3: string;
  text1: string;
  text2: string;
  container4: string;
  text3: string;
  text4: string;
  container5: string;
  text5: string;
  text6: string;
  container6: string;
  text7: string;
  text8: string;
  container7: string;
  text9: string;
  text10: string;
}
