"use client";

import SwingSDK from "@swing.xyz/sdk";
import { useEffect, useState } from "react";
import { getSwingInstance } from "../lib/swing/index";

function useSwing() {
  const [swing, setswing] = useState<null | SwingSDK>(null);

  useEffect(() => {
    const init = async () => {
      setswing(await getSwingInstance());
    };

    init();
  }, []);

  return { swing };
}

export default useSwing;
