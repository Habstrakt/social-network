import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
		posts: [
				{id: 1, message: 'Biba', likesCount: 12},
				{id: 2, message: 'Zdarowa', likesCount: 50},
		]
};

test('length of posts should be incremented', () => {
		// 1 исходные данные
		let action = addPostActionCreator("bla bla bla");

		// 2 экшен
		let newState = profileReducer(state, action)

		// проверяем ожидаемое
		expect(newState.posts.length).toBe(3);
});

test('message of the new post should be correct', () => {
		// 1 исходные данные
		let action = addPostActionCreator("bla bla bla");

		let state = {
				posts: [
						{id: 1, message: 'Biba', likesCount: 12},
						{id: 2, message: 'Zdarowa', likesCount: 50},
				]
		};

		// 2 экшен
		let newState = profileReducer(state, action)

		// проверяем ожидаемое
		expect(newState.posts[2].message).toBe('bla bla bla');
});

test('after deleting length of message should be decrement', () => {
		// 1 исходные данные
		let action = deletePost(1);


		// 2 экшен
		let newState = profileReducer(state, action)

		// проверяем ожидаемое
		expect(newState.posts.length).toBe(1);
});

test('after deleting length should be decrement if ID is incorrect', () => {
		// 1 исходные данные
		let action = deletePost(1999);


		// 2 экшен
		let newState = profileReducer(state, action)

		// проверяем ожидаемое
		expect(newState.posts.length).toBe(2);
});