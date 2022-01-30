const categories = {
  Communications: [
    {
      id: '1',
      name: 'Messenger',
      iconProvider: 'MaterialCommunityIcons',
      icon: 'message-minus-outline',
      noRecord: {
        iconProvider: 'MaterialCommunityIcons',
        icon: 'message-minus-outline',
        noRecordTitle: 'No messages - yet!',
        noRecordMessage:
          'Start a new conversation about an issue with an administrator.',
        newRecordButtonText: 'Start a new message',
      },
      startAction: {
        navigateTo: 'MessengerScreen',
      },
      startActionParams: {
        messageId: null,
        category: null,
        question: null,
        createdAt: null,
      },
    },
    {
      id: '2',
      name: 'Notices',
      iconProvider: 'FontAwesome',
      icon: 'bell-o',
      noRecord: {
        iconProvider: 'FontAwesome',
        icon: 'bell-o',
        noRecordTitle: 'No notices - yet!',
        noRecordMessage: 'Notices can only be created by an administrator.',
        newRecordButtonText: 'Start a new notice',
      },
      startAction: {
        navigateTo: 'NoticeScreen',
      },
      startActionParams: {},
    },
    {
      id: '3',
      name: 'Reminders',
      iconProvider: 'AntDesign',
      icon: 'calendar',
      noRecord: {
        iconProvider: 'AntDesign',
        icon: 'calendar',
        noRecordTitle: 'No reminders - yet!',
        noRecordMessage:
          'To create a new reminder, simply tap the add reminder icon on a notice on the notices screen.',
        newRecordButtonText: '',
      },
      startActionParams: {},
    },
  ],
  Media: [
    {
      id: '1',
      name: 'Videos',
      iconProvider: 'AntDesign',
      icon: 'playcircleo',
      noRecord: {
        iconProvider: 'AntDesign',
        icon: 'playcircleo',
        noRecordTitle: 'No videos - yet!',
        noRecordMessage: 'Only an administrator can upload videos.',
        newRecordButtonText: 'Upload videos',
      },
    },
    {
      id: '2',
      name: 'Images',
      iconProvider: 'Ionicons',
      icon: 'md-images-outline',
      noRecord: {
        iconProvider: 'Ionicons',
        icon: 'md-images-outline',
        noRecordTitle: 'No images - yet!',
        noRecordMessage: 'Only an administrator can upload images.',
        newRecordButtonText: 'Upload images',
      },
    },
    {
      id: '3',
      name: 'Maps',
      iconProvider: 'Ionicons',
      icon: 'map-outline',
      noRecord: {
        iconProvider: 'Ionicons',
        icon: 'map-outline',
        noRecordTitle: 'Maps',
        noRecordMessage:
          'Use google maps to locate the nearest police station or fast food restaurant.',
        newRecordButtonText: 'Open Google Maps!',
      },
    },
  ],
  Library: [
    {
      id: '1',
      name: 'Notes',
      iconProvider: 'AntDesign',
      icon: 'book',
      noRecord: {
        iconProvider: 'AntDesign',
        icon: 'book',
        noRecordTitle: 'No notes - yet!',
        noRecordMessage: 'Only an administrator can upload notes.',
        newRecordButtonText: 'Upload notes',
      },
    },
    {
      id: '2',
      name: 'Exams',
      iconProvider: 'Ionicons',
      icon: 'book-outline',
      noRecord: {
        iconProvider: 'Ionicons',
        icon: 'book-outline',
        noRecordTitle: 'No sample exams - yet!',
        noRecordMessage: 'Only an administrator can upload sample exams.',
        newRecordButtonText: 'Upload a new sample exam',
      },
    },
    {
      id: '3',
      name: 'Classes',
      iconProvider: 'MaterialCommunityIcons',
      icon: 'google-classroom',
      noRecord: {
        iconProvider: 'MaterialCommunityIcons',
        icon: 'google-classroom',
        noRecordTitle: 'No classes - yet!',
        noRecordMessage: 'Only an administrator can upload class information.',
        newRecordButtonText: 'Upload new class',
      },
    },
    {
      id: '4',
      name: 'Links',
      iconProvider: 'FontAwesome',
      icon: 'external-link',
      noRecord: {
        iconProvider: 'FontAwesome',
        icon: 'external-link',
        noRecordTitle: 'No links - yet!',
        noRecordMessage: 'Only an administrator can upload links.',
        newRecordButtonText: 'Upload new liks',
      },
    },
  ],
  Contribute: [
    {id: '1', name: 'Donate', iconProvider: '', icon: ''},
    {id: '2', name: 'My Donations', iconProvider: '', icon: ''},
  ],
  Profile: [
    {id: '1', name: 'Profile', iconProvider: '', icon: ''},
    {id: '2', name: 'Settings', iconProvider: '', icon: ''},
  ],
};

export default categories;
