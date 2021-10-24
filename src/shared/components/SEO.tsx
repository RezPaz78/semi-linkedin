import React from "react";
import { Helmet ,HelmetProps } from "react-helmet";



type SeoProps = {
  description ?: string,
  lang?: string,
  meta?: HelmetProps['meta'],
  title: string
} 

const SEO: React.FC<SeoProps> = ({ description, lang, meta, title }) => {
  const metaDescription =
    description || "This is a semi-linkedIn app built by react.";
  const defaultTitle = "LinkedIn";


  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Reza Pazan` || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...(meta || [])
      ]}
    />
  );
};

export default SEO;
