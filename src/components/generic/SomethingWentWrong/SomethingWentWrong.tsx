import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styles from "./SomethingWentWrong.module.scss";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface SomethingWentWrongProps {
  title?: string;
  reload?: boolean;
  reloadFn?: () => void;
}

const SomethingWentWrong: FunctionComponent<SomethingWentWrongProps> = props => {
  return (
    <section className={styles.cont}>
      <FontAwesomeIcon icon={faExclamationCircle} size="5x" className={styles.icon} />
      <h1>{props.title || "Oops! Something went wrong"}</h1>
      {props.children && <div className={styles.content}>{props.children}</div>}
      <div className={styles.ctas}>
        {props.reload && (
          <button className={"btn secondary medium fill " + styles.reload} onClick={props.reloadFn}>
            Reload
          </button>
        )}
        <Link to="contact" className={"btn primary medium fill"}>Give Feedback</Link>
      </div>
    </section>
  );
};

export default SomethingWentWrong;
