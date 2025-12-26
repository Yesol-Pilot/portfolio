import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
    const siteTitle = 'Yesol Heo | Creative Technologist';
    const siteDescription = 'Portfolio of Yesol Heo, a Creative Technologist specializing in 3D Web, AI, and Interactive Experiences.';
    const siteUrl = 'https://heoyesol.kr';
    const defaultImage = '/assets/og-image.jpg';

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || siteDescription} />
            <link rel="canonical" href={url || siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || siteDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || siteUrl} />
            <meta property="twitter:title" content={title || siteTitle} />
            <meta property="twitter:description" content={description || siteDescription} />
            <meta property="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
