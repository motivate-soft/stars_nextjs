import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function MetaList() {
  return (
    <div>
      <Link href="/admin/meta?id=new">
        <a>Add</a>
      </Link>
    </div>
  );
}
