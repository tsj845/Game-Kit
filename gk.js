class GKBoard {
	constructor (size) {
		this.board = document.getElementById("gk-board");
		this.board.hidden = false;
		this.map = {};
		this.localCopy = [];
		this.size = size;
		this.cx = 0;
		this.cy = 0;
		this.helptext = {};
		this.makeboard(size);
	}
	render (chx, chy) {
		chx = (chx==undefined?this.cx:chx);
		chy = (chy==undefined?this.cy:chy);
		this.cx = chx;
		this.cy = chy;
		for (let y = 0; y < this.size; y ++) {
			for (let x = 0; x < this.size; x ++) {
				this.set_src(x, y, this.map[this.localCopy[this.cy*this.size+y][this.cx*this.size+x]]);
			}
		}
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

gk.map[0] = "sprites/test.jpg";
gk.map[1] = "defaults/empty.png";
gk.localCopy = [[0,0,0,0,0],
				[0,1,1,1,0],
				[0,1,1,1,0],
				[0,1,1,1,0],
				[0,0,0,0,0]];

gk.render();