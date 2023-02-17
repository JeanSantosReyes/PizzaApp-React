
export const Loading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '60vh' }}>
            <div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}