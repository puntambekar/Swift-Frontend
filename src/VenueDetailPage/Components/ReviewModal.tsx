interface UserData {
    name: string;
    phoneNumber: string;
    email: string;
}


export const ReviewModal:React.FC<{handleBackToDetailModal:()=>void,closeModal: () => void, filteredSlots: { time: string, courtAvailable: number }[] | undefined,userData:UserData}> = (props)=>{
    return(<><div className="modal-header">
    <h5 className="modal-title">Review</h5>
    <button type="button" className="btn-close" onClick={props.closeModal}></button>
</div>
<div className="modal-body">

    <p>{JSON.stringify(props.filteredSlots)}</p>
    <p>{JSON.stringify(props.userData)}</p>

</div>
<div className="modal-footer">
    <button type="button" className="btn btn-secondary" onClick={props.handleBackToDetailModal}>Back</button><button type="button" className="btn btn-primary">Book</button>
</div></>)
}