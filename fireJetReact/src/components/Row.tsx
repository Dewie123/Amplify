import "./Row.css";

export default function Row({
  className = "",
  container1 = "",
  container2 = "",
  text = "Janet Paua",
  container3 = "",
  container4 = "",
  text1 = "5.30pm-10pm",
  text2 = "Sound Tech",
  container5 = "",
  container6 = "",
  text3 = "9am-12pm",
  text4 = "Sound Tech",
  container7 = "",
  container8 = "",
  text5 = "Sound Tech",
  container9 = "",
  container10 = "",
  text6 = "9am-12pm",
  text7 = "Sound Tech",
  container11 = "",
  container12 = "",
  text8 = "6pm-10.30pm",
  text9 = "Sound Tech",
}: RowProps) {
  return (
    <div className={`${className} row-row-8`}>
      <div
        className={`${container1} row-t-cell-cell-cell-cell-cell-cell-cell-cell-6`}
      >
        <div className="row-cell-48">
          <div className={`${container2}`}>{text}</div>
        </div>
        <div className={`${container3} row-cell-49`}>
          <div className="row-text-43">
            <span>
              <p className={`${container4}`}>{text1}</p>
              <p className="row-para-45">{text2}</p>
            </span>
          </div>
        </div>
        <div className={`${container5} row-cell-50`}>
          <div className="row-text-44">
            <span>
              <p className={`${container6}`}>{text3}</p>
              <p className="row-para-47">{text4}</p>
            </span>
          </div>
        </div>
        <div className={`${container7} row-cell-51`}>
          <div className="row-text-45">
            <span>
              <p className={`${container8}`}>9am-5.30pm</p>
              <p className="row-para-49">{text5}</p>
            </span>
          </div>
        </div>
        <div className={`${container9} row-cell-52`}>
          <div className="row-text-46">
            <span>
              <p className={`${container10}`}>{text6}</p>
              <p className="row-para-51">{text7}</p>
            </span>
          </div>
        </div>
        <div className={`${container11} row-cell-53`}>
          <div className="row-text-47">
            <span>
              <p className={`${container12}`}>{text8}</p>
              <p className="row-para-53">{text9}</p>
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
  container4: string;
  text1: string;
  text2: string;
  container5: string;
  container6: string;
  text3: string;
  text4: string;
  container7: string;
  container8: string;
  text5: string;
  container9: string;
  container10: string;
  text6: string;
  text7: string;
  container11: string;
  container12: string;
  text8: string;
  text9: string;
}
