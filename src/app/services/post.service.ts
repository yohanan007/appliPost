import { Post} from '../models/post.model';
import { Subject } from 'rxjs/Subject';

export class PostService {
	
	// service gerant les posts
	
	// declaration des posts initiaux
	 posts: Post[] = [new Post(1,-1,'Mon premier post','salut à tous voici mon premier post'),
	new Post(2,2,'Mon second post','salut à tous voici mon second post'),
	new Post(3,3,'Mon troisiéme post','salut à tous voici mon troisiéme post')];
	
	postSubject = new Subject <Post[]>();
	
	emitPosts(){
		this.postSubject.next(this.posts.slice());
	}
	
	addPost(titre: string, contenu: string){
		// calcul du nouveau id 
		var j = this.posts.length; 
		j = this.posts[j-1].id;
		j = j  + 1; 
		console.log('variable j ' + j);
		// Nouveau Post
		const newPost  = new Post(j,0,titre, contenu);
		// on integre le post dans le tableau
		this.posts.push(newPost);
		this.emitPosts();
	}
	
	removeElement(i: number){
		this.posts.splice(i,1);
	}
	
	
	// fonction permettant d'ajouter un like 
	likeMore(i: number){
		this.posts[i].like  = this.posts[i].like + 1; 
		console.log("like" + this.posts[i].like);
	}
	
	// fonction permettant d'enlever un like
	likeLess(i: number){
		
		this.posts[i].like = this.posts[i].like - 1;
		console.log("like" + this.posts[i].like);
	}
	
	lastIndex(){
		var j ;
		j = this.posts.length;
		console.log('taille:' + j);

	}
}