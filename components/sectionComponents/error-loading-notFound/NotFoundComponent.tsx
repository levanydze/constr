import Link from "next/link";
import styles from "./NotFoundComponent.module.css";

function NotFoundComponent() {
  return (
    <div className="container1">
      <div className={styles.notFound}>
        <h6 className="title5">404</h6>
        <h5 className="title3">
          Sorry, the page you are looking for was not found!
        </h5>
        <Link className="button2" href="./">
          Back To Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFoundComponent;
