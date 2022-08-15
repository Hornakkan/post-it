import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import IndexPost from '../IndexPost.vue'
import loadData from '../IndexPost.vue'
import Details from '../ItemPost.vue'
import Header from '../IndexHeader.vue'

// Header rendering tests
describe('Header', () => {
  it('Header with 0 tasks', () => {
    const wrapper = mount(Header, {
      props: {
        postCount: 0
      }
    })
    expect(wrapper.find('div').exists()).toBeTruthy();
    expect(wrapper.find('span').exists()).toBeTruthy();
    expect(wrapper.text()).toContain('Congratulations all tasks done !')
  })

  it('Header with 1 task', () => {
    const wrapper = mount(Header, {
      props: {
        postCount: 1
      }
    })
    expect(wrapper.find('div').exists()).toBeTruthy();
    expect(wrapper.find('span').exists()).toBeTruthy();
    expect(wrapper.text()).toContain('Good job, only 1 task remaining')
  })

  it('Header with more than 1 task', () => {
    const wrapper = mount(Header, {
      props: {
        postCount: 5
      }
    })
    expect(wrapper.find('div').exists()).toBeTruthy();
    expect(wrapper.find('span').exists()).toBeTruthy();
    expect(wrapper.text()).toContain('You have 5 tasks left')
  })
})

// Post-it component rendering test
describe('Details', () => {
  it('Details page loads', () => {

    const wrapper = mount(Details)
    expect(wrapper.find('div').exists()).toBeTruthy();
    expect(wrapper.find('h3').exists()).toBeTruthy();
    expect(wrapper.find('p').exists()).toBeTruthy();
  })
})

// ReferenceError: fetch is not defined pour les tests ci-dessous

// // Index rendering tests
// describe('IndexPost', () => {
//   it('Index page loads properly', () => {
//     const wrapper = mount(IndexPost);
//     expect(wrapper.find('div').exists()).toBeTruthy();
//     expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
//     expect(wrapper.find('input[type="text"]')).toContain('');
//     expect(wrapper.find('button').exists()).toBeTruthy();
//   })
// })


// // Post-it details view rendering test
// describe('ViewPost', () => {
//   it('ViewPost page loads', () => {
//     const wrapper = mount(ViewPost)

//     expect(wrapper).toBeTruthy();
//     expect(wrapper.find('h3').exists()).toBeTruthy();
//     expect(wrapper.find('p').exists()).toBeTruthy();
//   })
// })