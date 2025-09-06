export default function Pic({ src, load = "lazy", size, role = "img", alt = "" }) {
    const scales = [1, 2, 4, 8]
    const sizeScaling = [
        size * scales[0],
        size * scales[1],
        size * scales[2],
        size * scales[3]
    ]

    return (
        <picture>
            {src.avif && (
                <source
                    type="image/avif"
                    srcSet={
                        src.avif + "?width=" + sizeScaling[0] + " " + sizeScaling[0] + "w," +
                        src.avif + "?width=" + sizeScaling[1] + " " + sizeScaling[1] + "w," +
                        src.avif + "?width=" + sizeScaling[2] + " " + sizeScaling[2] + "w," +
                        src.avif + "?width=" + sizeScaling[3] + " " + sizeScaling[3] + "w"
                    }
                    sizes={"(max-width: 400px) 100vw, 50vw"}
                    width="100%"
                />
            )}
            <img
                loading={load}
                role={role}
                srcSet={
                    src.default + "?width=" + sizeScaling[0] + " " + sizeScaling[0] + "w," +
                    src.default + "?width=" + sizeScaling[1] + " " + sizeScaling[1] + "w," +
                    src.default + "?width=" + sizeScaling[2] + " " + sizeScaling[2] + "w," +
                    src.default + "?width=" + sizeScaling[3] + " " + sizeScaling[3] + "w"
                }
                sizes={"(max-width: 400px) 100vw, 50vw"}
                width="100%"
                src={src.default}
                alt={alt} />
        </picture>
    )
}