import React, { useMemo } from "react";

const OurCompany = () => {
    const images = useMemo(() => [
        'https://res.cloudinary.com/dyj4csr44/image/upload/v1739382494/Companies/wcl3xh9oo28kn2obdkbt.jpg',
        'https://res.cloudinary.com/dyj4csr44/image/upload/v1739382494/Companies/e9ppj9cks6r2e2yunhfa.jpg',
        'https://res.cloudinary.com/dyj4csr44/image/upload/v1739382494/Companies/ujjjktmlmm8pczls1iqe.jpg',
        'https://res.cloudinary.com/dyj4csr44/image/upload/v1739382493/Companies/zkvfa0ohynxby7bklrws.jpg',
        'https://res.cloudinary.com/dyj4csr44/image/upload/v1739382493/Companies/wvdbg97lpl2vgrattxzj.jpg',
        'https://res.cloudinary.com/dyj4csr44/image/upload/v1739382494/Companies/wcl3xh9oo28kn2obdkbt.jpg',
        'https://res.cloudinary.com/dyj4csr44/image/upload/v1739382494/Companies/e9ppj9cks6r2e2yunhfa.jpg',
        "https://res.cloudinary.com/dyj4csr44/image/upload/v1739382494/Companies/ujjjktmlmm8pczls1iqe.jpg",
        "https://res.cloudinary.com/dyj4csr44/image/upload/v1739382493/Companies/zkvfa0ohynxby7bklrws.jpg",
        'https://res.cloudinary.com/dyj4csr44/image/upload/v1739382493/Companies/zkvfa0ohynxby7bklrws.jpg',
        'https://res.cloudinary.com/dyj4csr44/image/upload/v1739382493/Companies/wvdbg97lpl2vgrattxzj.jpg',
        'https://res.cloudinary.com/dyj4csr44/image/upload/v1739382494/Companies/wcl3xh9oo28kn2obdkbt.jpg',
        'https://res.cloudinary.com/dyj4csr44/image/upload/v1739382494/Companies/e9ppj9cks6r2e2yunhfa.jpg',
        "https://res.cloudinary.com/dyj4csr44/image/upload/v1739382494/Companies/ujjjktmlmm8pczls1iqe.jpg",
        "https://res.cloudinary.com/dyj4csr44/image/upload/v1739382493/Companies/zkvfa0ohynxby7bklrws.jpg",
    ], []);

    
    const totalColumns = 12;

    // Prepare 12 empty columns
    const columns = Array.from({ length: totalColumns }, () => []);

    // Distribute images into 12 columns evenly
    images.forEach((image, index) => {
        columns[index % totalColumns].push(image);
    });

    return (
        <>
            <h3 className="text-white text-center sm:p-1 md:p-1 pt-4">Major Companies</h3>
            <section className="pt-4 pb-1">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {columns.map((columnImages, colIndex) => (
                            <div key={colIndex} className="col">
                                {columnImages.map((image, index) => (
                                    <div key={index} className="mb-3">
                                        <img
                                            src={image}
                                            alt={`company-${colIndex}-${index}`}
                                            className="img-fluid rounded-lg"
                                            style={{
                                                width: '100%',
                                                height: '80px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurCompany;
