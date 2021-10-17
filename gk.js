class GKBoard {
	constructor (size) {
		this.board = document.getElementById("gk-board");
		this.board.hidden = false;
		this.map = {};
		this.size = size;
		this.makeboard(size);
	}
	render () {
		//
	}
	set_src (x, y, v) {
		this.board.children[y*this.size+x].src = v;
	}
	makeboard (size) {
		this.size = size;
		this.board.style.cssText = "--size:"+size+";";
		this.board.replaceChildren();
		for (let y = 0; y < size; y ++) {
			for (let x = 0; x < size; x ++) {
				const img = document.createElement("img");
				img.src = "defaults/empty.png";
				img.style.cssText = "--x:"+x+";--y:"+y+";";
				img.className = "gk-tile";
				this.board.appendChild(img);
			}
		}
	}
}

const gk = new GKBoard(5);