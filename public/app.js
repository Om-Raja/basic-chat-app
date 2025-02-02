let deleteBtns = document.querySelectorAll(".delete-btn");
for(let i = 0; i < deleteBtns.length; i++){
    deleteBtns[i].addEventListener("click", async (event)=>{
        const chatId = await event.currentTarget.dataset.chatId;
        const confirmation = window.confirm("Are you sure you want to delete this chat?");
        if(confirmation){
            await fetch(`/chats/${chatId}`, {
                method: "DELETE",
            });
            window.location.reload();
        }
    })
}