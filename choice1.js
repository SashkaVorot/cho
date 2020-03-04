class ChoiceDiv{
	constructor( id ){
		this.div = document.createElement("div");
		this.div.id = id;
		this.div.classList.toggle("choice")

		let p = this.createP();
		let inp = this.createI();
		let but = this.createB();

		p.innerHTML = "выбор " + (id + 1);
		but.innerHTML = "удалить " + (id + 1);
		but.addEventListener("click", this.delet)

		this.div.append(p);
		this.div.append(inp);
		this.div.append(but);
	}

	delet(){
		console.log(this.div)
		/*let d = this.div.id;
		ins.dispatchEvent( new CustomEvent("delete", {detail: { id: d }}));
		this.div.remove();*/
	}

	paste(){
		add_b.before(this.div)
	}

	update(){
		p.innerHTML = "выбор " + this.div.id;
		but.innerHTML = "удалить " + this.div.id;

		this.div.id--;
	}

	createP(){
		return document.createElement("p");
	}

	createI(){
		return document.createElement("input");
	}

	createB(){
		return document.createElement("button");
	}
}