export const formatTime = (time: string) => {
    return new Date(`1970-01-01T${time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   
};


export const formatTimeForBackend = (time: string) => {
    return new Date(time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' })
}
