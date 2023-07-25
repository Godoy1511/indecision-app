    // handleDeleteOptions() {
    //     this.setState(() => {
    //         return {
    //             options: []
    //         }
    //     });
    // }

    // Os 2 handleDeleteOptions são equivalentes

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }