import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrcheckintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Quality Service",
    description:
      "At the heart of our success is our unwavering commitment to providing high-quality service. We pride ourselves on delivering top-notch solutions that consistently meet and exceed our clients' expectations.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Affordability",
    description:
      "We understand the value of money and work diligently to offer competitive prices without compromising on quality. Clients appreciate our commitment to affordability, ensuring that they receive great value for their investment.",
    icon: LockClosedIcon,
  },
  {
    name: "Trustworthiness",
    description:
      "Trust is fundamental to the relationship we build with our clients. Over the years, we've earned their trust by consistently delivering on our promises and safeguarding their interests.",
    icon: ArrowPathIcon,
  },
  
];

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2> */}
          <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-7xl xl:text-7xl">
            Few Reasons Why People Choose Us!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose us for top quality, fair prices, lots of options, easy
            access, trust, honesty, and dependable service. Our united team is
            here to put your needs first. We're the provider you can trust for
            all your needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
