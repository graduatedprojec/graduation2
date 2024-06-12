export const resourse_form = [
  {
    id: "name",
    label: "Name",
    name: "name",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
];

//========================= PATIENTS DATA ==========

export const patient_form = [
  {
    id: "name",
    label: "Name",
    name: "name",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
  {
    id: "gender",
    label: "Gender",
    name: "gender",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
  {
    id: "address",
    label: "Address",
    name: "address",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },

  {
    id: "disease",
    label: "Disease",
    name: "disease",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
];

//========================= ROOMS DATA ==========
export const rooms_form = [
  {
    id: "roomnumber",
    label: "Room Number",
    name: "room_number",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
  {
    id: "bednumber",
    label: "Bed Number",
    name: "bed_numbers",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
];
