import profileReducer, {ProfileReducerActionsType,} from "./profileReducer";
import dialogsReducer, {DialogsReducerActionsType,} from "./dialogsReducer";

export type MessageType = {
	id?: number;
	message: string;
};
export type DialogType = {
	id: number;
	name: string;
	avatarUrl: string;
};
export type PostsType = {
	id?: number;
	text: string;
	likes: number;
};

export type ProfilePageType = {
	messageForNewPost: string;
	posts: Array<PostsType>;
};
export type DialogPageType = {
	dialogs: Array<DialogType>;
	messages: Array<MessageType>;
	newMessageText: string;
};

export type RootStateType = {
	profilePage: ProfilePageType;
	dialogPage: DialogPageType;
};
export type StoreType = {
	_state: RootStateType;
	_renderTree: () => void;
	subscribe: (observer: () => void) => void;
	getState: () => RootStateType;
	dispatch: (action: RootActionsType) => void;
};

export type RootActionsType = | ProfileReducerActionsType | DialogsReducerActionsType

let store: StoreType = {
	_state: {
		profilePage: {
			messageForNewPost: "",
			posts: [
				{
					id: 1,
					text: "VSIO",
					likes: 10,
				},
				{
					id: 2,
					text: "ZBS",
					likes: 20,
				},
				{
					id: 3,
					text: "OK",
					likes: 2,
				},
			],
		},
		dialogPage: {
			newMessageText: "",
			dialogs: [
				{
					id: 1,
					name: "Max",
					avatarUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
				},
				{
					id: 2,
					name: "Alex",
					avatarUrl: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg",
				},
				{
					id: 3,
					name: "Petya",
					avatarUrl:
						"https://i.pinimg.com/736x/01/6b/86/016b86df2200d0b3a456d0a32d4cd6ee.jpg",
				},
				{
					id: 4,
					name: "Olya",
					avatarUrl:
						"https://vjoy.cc/wp-content/uploads/2020/12/1133ea1de4e69bd760056f2c04e90920.png",
				},
				{
					id: 5,
					name: "Katya",
					avatarUrl:
						"https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg",
				},
			],
			messages: [
				{
					id: 1,
					message: "hi",
				},
				{
					id: 2,
					message: "my",
				},
				{
					id: 3,
					message: "name",
				},
				{
					id: 4,
					message: "is",
				},
				{
					id: 5,
					message: "Katya",
				},
			],
		},
	},
	_renderTree() {
		console.log("Render");
	},
	getState() {
		return this._state;
	},
	subscribe(observer: () => void) {
		this._renderTree = observer; // наблюдатель
	},
	dispatch(action) {
		if (action.type === "ADD_POST" || action.type === "UPDATE_NEW_POST_TEXT") {
			this._state.profilePage = profileReducer(this._state.profilePage, action);
		}
		if (action.type === "ADD_MESSAGE" || action.type === "UPDATE_NEW_MESSAGE_TEXT") {
			this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
		}
		this._renderTree();
	},
};

export default store;
