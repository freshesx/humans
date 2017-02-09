// import pull from 'lodash/pull'
let storages = []

export function addStorage (path, name, value) {
  const find = findStorage(path, name)

  // 存在则删除
  if (find) {
    const index = storages.indexOf(find)
    if (index >= 0) {
      storages.splice(index, 1)
    }
  }

  // 新增
  storages.push({ path, name, value })
}

export function getStorage (path, name) {
  return findStorage(path, name)
}

export function getScrollTop (path, name, defaultValue = 0) {
  const storage = getStorage(path, name)
  return storage ? storage.value : defaultValue
}

function findStorage (path, name) {
  const finds = storages.filter(item => item.path === path && item.name === name)
  return finds.length > 0
    ? finds[0]
    : null
}
