import React from "react";
import RunningText from "./running-text";
import ImageWithText from "./ImageWithText";
import CommonSlider from "@/components/landing-page/sliders/CommonSlider";
import SingleSlider from "@/components/landing-page/sliders/SingleSlider";
import FourSlider from "@/components/landing-page/sliders/FourSlider";
import TwoWithFour from "./sliders/TwoWithFour";

const Landing = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const datas = await res.json();

  const data = [
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "product",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "job",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "product",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "product",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "product",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "product",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "product",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "product",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "product",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "product",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "product",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
    {
      id: crypto.randomUUID(),
      title: "temporibus sit alias delectus eligendi possimus magni",
      pathname: "product",
      body: "cupiditate quo est a modi nesciunt soluta\n' +'ipsa voluptas error itaque dicta in\n' +'autem qui minus magnam et distinctio eum\n' +'accusamus ratione error aut",
    },
  ];

  // console.log(data);

  return (
    <div className="w-full ">
      <RunningText direction="left" />

      <SingleSlider Images={data} />
      <FourSlider Images={data} />

      <TwoWithFour />
      <FourSlider Images={data} />

      <SingleSlider Images={data} />
      {/* <CommonSlider
        Images={data}
        smDeviceCount="1"
        lgDeviceCount="3"
        midDeviceCount="3"
      />

      <CommonSlider
        Images={data}
        smDeviceCount="1"
        lgDeviceCount="2"
        midDeviceCount="2"
      /> */}
      {/* <CommonSlider
        Images={data}
        smDeviceCount="1"
        lgDeviceCount="2"
        midDeviceCount="3"
      />
      <CommonSlider
        Images={data}
        smDeviceCount="1"
        lgDeviceCount="1"
        midDeviceCount="1"
      />
      <CommonSlider
        Images={data}
        smDeviceCount="2"
        lgDeviceCount="5"
        midDeviceCount="2"
      />

      {/* ractangle  */}
      {/* <CommonSlider
        Images={data}
        smDeviceCount="1"
        lgDeviceCount="1"
        midDeviceCount="1"
      />
      <CommonSlider
        Images={data}
        smDeviceCount="2"
        lgDeviceCount="5"
        midDeviceCount="3"
      />

      <RunningText direction="right" />

      <CommonSlider
        Images={data}
        smDeviceCount="2"
        lgDeviceCount="5"
        midDeviceCount="3"
      />
      <RunningText direction="left" />

      <CommonSlider
        Images={data}
        smDeviceCount="3"
        lgDeviceCount="6"
        midDeviceCount="3"
      />
      <CommonSlider
        Images={data}
        smDeviceCount="2"
        lgDeviceCount="5"
        midDeviceCount="3"
      />
      <CommonSlider
        Images={data}
        smDeviceCount="3"
        lgDeviceCount="6"
        midDeviceCount="3"
      />
      <CommonSlider
        Images={data}
        smDeviceCount="2"
        lgDeviceCount="5"
        midDeviceCount="3"
      />

      <ImageWithText />
      <CommonSlider
        Images={data}
        smDeviceCount="2"
        lgDeviceCount="5"
        midDeviceCount="3"
      />  */}
    </div>
  );
};

export default Landing;
