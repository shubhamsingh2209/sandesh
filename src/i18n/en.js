import englishMessages from "ra-language-english";

export default {
  ...englishMessages,
  synapseadmin: {
    auth: {
      base_url: "Homeserver URL",
      welcome: "Welcome to Synapse-admin",
      username_error: "Please enter fully qualified user ID: '@user:domain'",
      protocol_error: "URL has to start with 'http://' or 'https://'",
      url_error: "Not a valid Matrix server URL",
    },
    users: {
      invalid_user_id:
        "Must be a fully qualified Matrix user-id, e.g. @user_id:homeserver",
    },
    rooms: {
      tabs: {
        basic: "Basic",
        members: "Members",
        detail: "Details",
        permission: "Permissions",
      },
      delete: {
        title: "Delete room",
        message:
          "Are you sure you want to delete the room? This cannot be undone. All messages and shared media in the room will be deleted from the server!",
      },
    },
  },
  import_users: {
    error: {
      at_entry: "At entry %{entry}: %{message}",
      error: "Error",
      required_field: "Required field '%{field}' is not present",
      invalid_value:
        "Invalid value on line %{row}. '%{field}' field may only be 'true' or 'false'",
      unreasonably_big:
        "Refused to load unreasonably big file of %{size} megabytes",
      already_in_progress: "An import run is already in progress",
      id_exits: "ID %{id} already present",
    },
    title: "Import users via CSV",
    goToPdf: "Go to PDF",
    cards: {
      importstats: {
        header: "Import users",
        users_total:
          "%{smart_count} user in CSV file |||| %{smart_count} users in CSV file",
        guest_count: "%{smart_count} guest |||| %{smart_count} guests",
        admin_count: "%{smart_count} admin |||| %{smart_count} admins",
      },
      conflicts: {
        header: "Conflict strategy",
        mode: {
          stop: "Stop on conflict",
          skip: "Show error and skip on conflict",
        },
      },
      ids: {
        header: "IDs",
        all_ids_present: "IDs present on every entry",
        count_ids_present:
          "%{smart_count} entry with ID |||| %{smart_count} entries with IDs",
        mode: {
          ignore: "Ignore IDs in CSV and create new ones",
          update: "Update existing records",
        },
      },
      passwords: {
        header: "Passwords",
        all_passwords_present: "Passwords present on every entry",
        count_passwords_present:
          "%{smart_count} entry with password |||| %{smart_count} entries with passwords",
        use_passwords: "Use passwords from CSV",
      },
      upload: {
        header: "Input CSV file",
        explanation:
          "Here you can upload a file with comma separated values that is processed to create or update users. The file must include the fields 'displayname' and 'phone_number'. You can download and adapt an example file here: ",
      },
      startImport: {
        simulate_only: "Simulate only",
        run_import: "Import",
      },
      results: {
        header: "Import results",
        total:
          "%{smart_count} entry in total |||| %{smart_count} entries in total",
        successful: "%{smart_count} entries successfully imported",
        skipped: "%{smart_count} entries skipped",
        download_skipped: "Download skipped records",
        with_error:
          "%{smart_count} entry with errors ||| %{smart_count} entries with errors",
        simulated_only: "Run was only simulated",
      },
    },
  },
  resources: {
    users: {
      backtolist: "Back to list",
      name: "User |||| Users",
      email: "Email",
      msisdn: "Phone",
      threepid: "Email / Phone",
      fields: {
        avatar: "Avatar",
        id: "User-ID",
        name: "Name",
        is_guest: "Guest",
        admin: "Server Administrator",
        deactivated: "Deactivated",
        guests: "Show guests",
        show_deactivated: "Show deactivated users",
        user_id: "Search user",
        displayname: "Displayname",
        password: "Password",
        avatar_url: "Avatar URL",
        avatar_src: "Avatar",
        medium: "Medium",
        threepids: "3PIDs",
        address: "Address",
        creation_ts_ms: "Creation timestamp",
        consent_version: "Consent version",
      },
      helper: {
        deactivate: "You must provide a password to re-activate an account.",
        erase: "Mark the user as GDPR-erased",
      },
      action: {
        erase: "Erase user data",
      },
    },
    rooms: {
      name: "Room |||| Rooms",
      fields: {
        room_id: "Room-ID",
        name: "Name",
        canonical_alias: "Alias",
        joined_members: "Members",
        joined_local_members: "local members",
        state_events: "State events",
        version: "Version",
        is_encrypted: "Encrypted",
        encryption: "Encryption",
        federatable: "Federatable",
        public: "Public",
        creator: "Creator",
        join_rules: "Join rules",
        guest_access: "Guest access",
        history_visibility: "History visibility",
      },
      enums: {
        join_rules: {
          public: "Public",
          knock: "Knock",
          invite: "Invite",
          private: "Private",
        },
        guest_access: {
          can_join: "Guests can join",
          forbidden: "Guests can not join",
        },
        history_visibility: {
          invited: "Since invited",
          joined: "Since joined",
          shared: "Since shared",
          world_readable: "Anyone",
        },
        unencrypted: "Unencrypted",
      },
    },
    connections: {
      name: "Connections",
      fields: {
        last_seen: "Date",
        ip: "IP address",
        user_agent: "User agent",
      },
    },
    devices: {
      name: "Device |||| Devices",
      fields: {
        device_id: "Device-ID",
        display_name: "Device name",
        last_seen_ts: "Timestamp",
        last_seen_ip: "IP address",
      },
      action: {
        erase: {
          title: "Removing %{id}",
          content: 'Are you sure you want to remove the device "%{name}"?',
          success: "Device successfully removed.",
          failure: "An error has occurred.",
        },
      },
    },
    servernotices: {
      name: "Server Notices",
      send: "Send server notices",
      fields: {
        body: "Message",
      },
      action: {
        send: "Send note",
        send_success: "Server notice successfully sent.",
        send_failure: "An error has occurred.",
      },
      helper: {
        send:
          'Sends a server notice to the selected users. The feature "Server Notices" has to be activated at the server.',
      },
    },
  },
};
