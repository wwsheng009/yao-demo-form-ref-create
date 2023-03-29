/**
 * 根据id找到pet的对象，返回so2 form的默认值
 * @param {number} id pet的id
 * @returns
 */
function Find(id) {
  const pet = Process("models.pet.Find", id, null);
  //或是其它对象值
  return { pet_name: pet["name"] };
}
/**
 * 永远创建新对象
 * @param {object} payload 表单的数据
 * @returns
 */
function Save(payload) {
  delete payload["id"]; //这里的id是pet的id
  return Process("models.so.Save", payload);
}
