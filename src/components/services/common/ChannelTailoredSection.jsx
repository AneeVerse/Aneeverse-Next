"use client";
import Layout from "../../common/Layout";
import { UiSubheading } from "@/components/common/typography/UiSubheading";
import { Heading } from "@/components/common/typography/Heading";

const ChannelTailoredSection = ({
  subtitle = "CHANNEL-TAILORED",
  title = "Ads that work wherever they are",
  titleHighlight = "wherever",
  description = "",
  channels = [],
}) => {
  return (
    <section className="bg-secondary-500 text-primary-500 py-24">
      <Layout>
        <div className="text-center max-w-4xl mx-auto mb-20">
          <UiSubheading
            align="center"
            className="text-white mb-6 text-sm tracking-[0.2em] uppercase font-medium"
          >
            {subtitle}
          </UiSubheading>
          <h2 className="font-normal text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white leading-[1.1] break-words mb-0">
            {title.includes(titleHighlight) && titleHighlight ? (
              <>
                {title.split(titleHighlight)[0]}
                <span className="italic">{titleHighlight}</span>
                {title.split(titleHighlight)[1]}
              </>
            ) : (
              title
            )}
          </h2>
          {description && (
            <p className="text-lg text-white/90 mt-6">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="group text-left"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-8 group-hover:bg-primary-500/20 transition-colors duration-300">
                <div className="text-primary-500 scale-125">
                  {channel.icon}
                </div>
              </div>
              <h3 className="text-2xl font-medium text-primary-500 mb-4">
                {channel.title}
              </h3>
              <p className="text-primary-500/70 text-lg leading-relaxed font-light">
                {channel.subtitle}
              </p>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default ChannelTailoredSection;

