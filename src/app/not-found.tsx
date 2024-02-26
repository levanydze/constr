import Link from "next/link";
import React from "react";

export default function error() {
  return (
    <div className="notFound">
      <h6 className="text10">404</h6>
      <h5 className="text2">
        Sorry, the page you are looking for was not found!
      </h5>
      <Link className="button2" href="./">
        Back To Homepage
      </Link>
    </div>
  );
}
