import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import DefaultLayout from '@/layouts/default.vue'

describe('defaultLayout', () => {
  it('renders slot content', () => {
    const wrapper = mount(DefaultLayout, {
      slots: {
        default: '<div>Test Content</div>',
      },
    })
    expect(wrapper.html()).toContain('Test Content')
  })
})
