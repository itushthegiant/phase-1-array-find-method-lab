
function superbowlWin(recordArr) {
    const result = recordArr.find(gameObj => gameObj.result === "W")
    return (result ? result.year : result)
}


