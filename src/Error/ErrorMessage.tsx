type ErrorProps = {
    children: string
}

export const ErrorMessage = ({children}: ErrorProps) => {
    return (
        <div style={{width: "100%", textAlign: "center", padding: "10"}}>
            {children}
        </div>
    )
}
