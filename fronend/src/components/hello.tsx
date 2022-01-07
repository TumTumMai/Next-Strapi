const Hello = ({
    text
}: {
    text: string
}): React.ReactElement => {
    return (
        <div>
            {text}
        </div>
    )
}

export default Hello