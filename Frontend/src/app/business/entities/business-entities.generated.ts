import { BaseEntity, TableFilter, TableFilterContext, TableFilterSortMeta, MimeTypes, Namebook } from 'spiderly';



export class Issue extends BaseEntity
{
    title?: string;
	description?: string;
	link?: string;
	isOpen?: boolean;
	issueLabelsCommaSeparated?: string;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        title,
		description,
		link,
		isOpen,
		issueLabelsCommaSeparated,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        title?: string;
		description?: string;
		link?: string;
		isOpen?: boolean;
		issueLabelsCommaSeparated?: string;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('Issue'); 

        this.title = title;
		this.description = description;
		this.link = link;
		this.isOpen = isOpen;
		this.issueLabelsCommaSeparated = issueLabelsCommaSeparated;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }
}


export class IssueSaveBody extends BaseEntity
{
    issueDTO?: Issue;
	selectedIssueLabelsIds?: number[];
	selectedAssigneesIds?: number[];
	unselectedAssigneesIds?: number[];
	areAllAssigneesSelected?: boolean;
	assigneesTableFilter?: TableFilter;

    constructor(
    {
        issueDTO,
		selectedIssueLabelsIds,
		selectedAssigneesIds,
		unselectedAssigneesIds,
		areAllAssigneesSelected,
		assigneesTableFilter
    }:{
        issueDTO?: Issue;
		selectedIssueLabelsIds?: number[];
		selectedAssigneesIds?: number[];
		unselectedAssigneesIds?: number[];
		areAllAssigneesSelected?: boolean;
		assigneesTableFilter?: TableFilter;     
    } = {}
    ) {
        super('IssueSaveBody'); 

        this.issueDTO = issueDTO;
		this.selectedIssueLabelsIds = selectedIssueLabelsIds;
		this.selectedAssigneesIds = selectedAssigneesIds;
		this.unselectedAssigneesIds = unselectedAssigneesIds;
		this.areAllAssigneesSelected = areAllAssigneesSelected;
		this.assigneesTableFilter = assigneesTableFilter;
    }
}


export class IssueMainUIForm extends BaseEntity
{
    issueDTO?: Issue;
	issueLabelsNamebookDTOList?: Namebook[];

    constructor(
    {
        issueDTO,
		issueLabelsNamebookDTOList
    }:{
        issueDTO?: Issue;
		issueLabelsNamebookDTOList?: Namebook[];     
    } = {}
    ) {
        super('IssueMainUIForm'); 

        this.issueDTO = issueDTO;
		this.issueLabelsNamebookDTOList = issueLabelsNamebookDTOList;
    }
}


export class IssueAssignee extends BaseEntity
{
    issueDisplayName?: string;
	issueId?: number;
	assigneeDisplayName?: string;
	assigneeId?: number;

    constructor(
    {
        issueDisplayName,
		issueId,
		assigneeDisplayName,
		assigneeId
    }:{
        issueDisplayName?: string;
		issueId?: number;
		assigneeDisplayName?: string;
		assigneeId?: number;     
    } = {}
    ) {
        super('IssueAssignee'); 

        this.issueDisplayName = issueDisplayName;
		this.issueId = issueId;
		this.assigneeDisplayName = assigneeDisplayName;
		this.assigneeId = assigneeId;
    }
}


export class IssueAssigneeSaveBody extends BaseEntity
{
    issueAssigneeDTO?: IssueAssignee;

    constructor(
    {
        issueAssigneeDTO
    }:{
        issueAssigneeDTO?: IssueAssignee;     
    } = {}
    ) {
        super('IssueAssigneeSaveBody'); 

        this.issueAssigneeDTO = issueAssigneeDTO;
    }
}


export class IssueAssigneeMainUIForm extends BaseEntity
{
    issueAssigneeDTO?: IssueAssignee;

    constructor(
    {
        issueAssigneeDTO
    }:{
        issueAssigneeDTO?: IssueAssignee;     
    } = {}
    ) {
        super('IssueAssigneeMainUIForm'); 

        this.issueAssigneeDTO = issueAssigneeDTO;
    }
}


export class IssueIssueLabel extends BaseEntity
{
    issueDisplayName?: string;
	issueId?: number;
	issueLabelDisplayName?: string;
	issueLabelId?: number;

    constructor(
    {
        issueDisplayName,
		issueId,
		issueLabelDisplayName,
		issueLabelId
    }:{
        issueDisplayName?: string;
		issueId?: number;
		issueLabelDisplayName?: string;
		issueLabelId?: number;     
    } = {}
    ) {
        super('IssueIssueLabel'); 

        this.issueDisplayName = issueDisplayName;
		this.issueId = issueId;
		this.issueLabelDisplayName = issueLabelDisplayName;
		this.issueLabelId = issueLabelId;
    }
}


export class IssueIssueLabelSaveBody extends BaseEntity
{
    issueIssueLabelDTO?: IssueIssueLabel;

    constructor(
    {
        issueIssueLabelDTO
    }:{
        issueIssueLabelDTO?: IssueIssueLabel;     
    } = {}
    ) {
        super('IssueIssueLabelSaveBody'); 

        this.issueIssueLabelDTO = issueIssueLabelDTO;
    }
}


export class IssueIssueLabelMainUIForm extends BaseEntity
{
    issueIssueLabelDTO?: IssueIssueLabel;

    constructor(
    {
        issueIssueLabelDTO
    }:{
        issueIssueLabelDTO?: IssueIssueLabel;     
    } = {}
    ) {
        super('IssueIssueLabelMainUIForm'); 

        this.issueIssueLabelDTO = issueIssueLabelDTO;
    }
}


export class IssueLabel extends BaseEntity
{
    name?: string;
	description?: string;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        name,
		description,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        name?: string;
		description?: string;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('IssueLabel'); 

        this.name = name;
		this.description = description;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }
}


export class IssueLabelSaveBody extends BaseEntity
{
    issueLabelDTO?: IssueLabel;

    constructor(
    {
        issueLabelDTO
    }:{
        issueLabelDTO?: IssueLabel;     
    } = {}
    ) {
        super('IssueLabelSaveBody'); 

        this.issueLabelDTO = issueLabelDTO;
    }
}


export class IssueLabelMainUIForm extends BaseEntity
{
    issueLabelDTO?: IssueLabel;

    constructor(
    {
        issueLabelDTO
    }:{
        issueLabelDTO?: IssueLabel;     
    } = {}
    ) {
        super('IssueLabelMainUIForm'); 

        this.issueLabelDTO = issueLabelDTO;
    }
}


export class Notification extends BaseEntity
{
    title?: string;
	description?: string;
	emailBody?: string;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;
	isMarkedAsRead?: boolean;

    constructor(
    {
        title,
		description,
		emailBody,
		version,
		id,
		createdAt,
		modifiedAt,
		isMarkedAsRead
    }:{
        title?: string;
		description?: string;
		emailBody?: string;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;
		isMarkedAsRead?: boolean;     
    } = {}
    ) {
        super('Notification'); 

        this.title = title;
		this.description = description;
		this.emailBody = emailBody;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
		this.isMarkedAsRead = isMarkedAsRead;
    }
}


export class NotificationSaveBody extends BaseEntity
{
    notificationDTO?: Notification;
	selectedRecipientsIds?: number[];
	unselectedRecipientsIds?: number[];
	areAllRecipientsSelected?: boolean;
	recipientsTableFilter?: TableFilter;
	isMarkedAsRead?: boolean;

    constructor(
    {
        notificationDTO,
		selectedRecipientsIds,
		unselectedRecipientsIds,
		areAllRecipientsSelected,
		recipientsTableFilter,
		isMarkedAsRead
    }:{
        notificationDTO?: Notification;
		selectedRecipientsIds?: number[];
		unselectedRecipientsIds?: number[];
		areAllRecipientsSelected?: boolean;
		recipientsTableFilter?: TableFilter;
		isMarkedAsRead?: boolean;     
    } = {}
    ) {
        super('NotificationSaveBody'); 

        this.notificationDTO = notificationDTO;
		this.selectedRecipientsIds = selectedRecipientsIds;
		this.unselectedRecipientsIds = unselectedRecipientsIds;
		this.areAllRecipientsSelected = areAllRecipientsSelected;
		this.recipientsTableFilter = recipientsTableFilter;
		this.isMarkedAsRead = isMarkedAsRead;
    }
}


export class NotificationMainUIForm extends BaseEntity
{
    notificationDTO?: Notification;

    constructor(
    {
        notificationDTO
    }:{
        notificationDTO?: Notification;     
    } = {}
    ) {
        super('NotificationMainUIForm'); 

        this.notificationDTO = notificationDTO;
    }
}


export class UserExtended extends BaseEntity
{
    email?: string;
	hasLoggedInWithExternalProvider?: boolean;
	isDisabled?: boolean;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        email,
		hasLoggedInWithExternalProvider,
		isDisabled,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        email?: string;
		hasLoggedInWithExternalProvider?: boolean;
		isDisabled?: boolean;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('UserExtended'); 

        this.email = email;
		this.hasLoggedInWithExternalProvider = hasLoggedInWithExternalProvider;
		this.isDisabled = isDisabled;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }
}


export class UserExtendedSaveBody extends BaseEntity
{
    userExtendedDTO?: UserExtended;

    constructor(
    {
        userExtendedDTO
    }:{
        userExtendedDTO?: UserExtended;     
    } = {}
    ) {
        super('UserExtendedSaveBody'); 

        this.userExtendedDTO = userExtendedDTO;
    }
}


export class UserExtendedMainUIForm extends BaseEntity
{
    userExtendedDTO?: UserExtended;

    constructor(
    {
        userExtendedDTO
    }:{
        userExtendedDTO?: UserExtended;     
    } = {}
    ) {
        super('UserExtendedMainUIForm'); 

        this.userExtendedDTO = userExtendedDTO;
    }
}


export class UserNotification extends BaseEntity
{
    notificationDisplayName?: string;
	notificationId?: number;
	userDisplayName?: string;
	userId?: number;
	isMarkedAsRead?: boolean;

    constructor(
    {
        notificationDisplayName,
		notificationId,
		userDisplayName,
		userId,
		isMarkedAsRead
    }:{
        notificationDisplayName?: string;
		notificationId?: number;
		userDisplayName?: string;
		userId?: number;
		isMarkedAsRead?: boolean;     
    } = {}
    ) {
        super('UserNotification'); 

        this.notificationDisplayName = notificationDisplayName;
		this.notificationId = notificationId;
		this.userDisplayName = userDisplayName;
		this.userId = userId;
		this.isMarkedAsRead = isMarkedAsRead;
    }
}


export class UserNotificationSaveBody extends BaseEntity
{
    userNotificationDTO?: UserNotification;

    constructor(
    {
        userNotificationDTO
    }:{
        userNotificationDTO?: UserNotification;     
    } = {}
    ) {
        super('UserNotificationSaveBody'); 

        this.userNotificationDTO = userNotificationDTO;
    }
}


export class UserNotificationMainUIForm extends BaseEntity
{
    userNotificationDTO?: UserNotification;

    constructor(
    {
        userNotificationDTO
    }:{
        userNotificationDTO?: UserNotification;     
    } = {}
    ) {
        super('UserNotificationMainUIForm'); 

        this.userNotificationDTO = userNotificationDTO;
    }
}

